# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class StudiosItem(scrapy.Item):
    name = scrapy.Field()
    group = scrapy.Field()
    phone = scrapy.Field()
    address = scrapy.Field()
    pass
