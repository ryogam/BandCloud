import scrapy
import items

class NoahSpider(scrapy.Spider):
    name = "noah_spider"
    allowed_domains = [
        "studionoah.jp",
    ]
    start_urls = [
        "https://www.studionoah.jp/studiomap/",
    ]

    def parse(self, response):
        noah_items = items.StudiosItem()

        studio_list_raw = response.css("div.studioalllist-wrap").xpath(".//tr")
        for studio_infos in studio_list_raw:
            studio_name = studio_infos.xpath(".//th//a").css("::text").getall()
            studio_phone = studio_infos.xpath(".//td//a").css("::text").getall()
            studio_address = studio_infos.css("td::text").getall()
            noah_items["group"] = "noah"
            noah_items["name"] = studio_name
            noah_items["phone"] = studio_phone
            if len(studio_address) == 2:
                studio_address.remove("\n")
            noah_items["address"] = studio_address
            yield noah_items