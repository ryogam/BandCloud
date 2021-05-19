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
    time = scrapy.Field()
    pass

class RoomsItem(scrapy.Item):
    group = scrapy.Field()
    studio_name = scrapy.Field()
    room_name = scrapy.Field()
    room_type = scrapy.Field()
    room_size = scrapy.Field()
    pass