# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import json
import boto3


class JsonWriterPipeline:
    def open_spider(self, spider):
        file_name = spider.name.replace("_spider", "")
        self.file = open(f"outputs/{file_name}_items.jsonl", "w")


    def close_spider(self, spider):
        return self.file.close()


    def process_item(self, item, spider):
        line = json.dumps(dict(item), ensure_ascii=False) + "\n"
        self.file.write(line)
        return item


class DynamoPipeline:
    collection_name = 'scrapy_items'

    def __init__(self, dynamo_uri, dynamo_db):
        self.dynamo_uri = dynamo_uri
        self.dynamo_db = dynamo_db


    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            dynamo_uri=crawler.settings.get('DYNAMO_URI'),
            dynamo_db=crawler.settings.get('DYNAMO_DATABASE', 'items')
        )


    def open_spider(self, spider):
        self.client = boto3.resource(self.dynamo_uri)
        self.db = self.client[self.dynamo_db]


    def close_spider(self, spider):
        self.client.close()


    def process_item(self, item, spider):
        self.db[self.collection_name].insert_one(ItemAdapter(item).asdict())
        return item