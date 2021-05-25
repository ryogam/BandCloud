import scrapy
import items


class NoahGroupSpider(scrapy.Spider):
    name = "noah_group_spider"
    allowed_domains = [
        "studionoah.jp",
    ]
    start_urls = [
        "https://www.studionoah.jp/studiomap/",
    ]


    def parse(self, response):
        studio_list_raw = response.css("div.studiomap-wrap").xpath(".//area/@href")
        for page in studio_list_raw.getall():
            child_page = "https://www." + "studionoah.jp" + str(page)
            yield scrapy.Request(child_page, callback=self.child_parse)


    def child_parse(self, response):
        studio_location = response.xpath(".//h1//span/text()").get()
        room_list_raw = response.css("div.inner.flex")
        room_type_raw = response.xpath(".//h3/text()")
        for all_room, room_type in zip(room_list_raw, room_type_raw):
            room_type = room_type.get()
            for room in all_room.css("div.st_box"):
                room_name = room.xpath(".//p/text()").get()
                room_size = room.xpath(".//p//span/text()").get()

                room_items = items.RoomsItem()
                room_items["room_name"] = room_name
                room_items["room_type"] = room_type
                room_items["room_size"] = room_size
                room_items["studio_name"] = studio_location

                yield room_items