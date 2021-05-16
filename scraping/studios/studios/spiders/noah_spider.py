import scrapy
from .. import items

class NoahSpider(scrapy.Spider):
    name = "noah_spider"
    allowed_domains = [
        "studionoah.jp",
        ]
    start_urls = [
        "https://www.studionoah.jp/studiomap/",
        ]

    def parse(self, response):
        studio_list_raw = response.css("div.studioalllist-wrap").xpath(".//tr")
        for studio_infos in studio_list_raw:
            studio_name = studio_infos.xpath(".//th//a").css("::text").getall()
            studio_phone = studio_infos.xpath(".//td//a").css("::text").getall()
            studio_address = studio_infos.css("td::text").getall()
            print(studio_name, studio_phone, studio_address)