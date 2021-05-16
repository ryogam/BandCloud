import scrapy
from .. import items

class Pentaspider(scrapy.Spider):
    name = "penta_spider"
    allowed_domains = [
        "studiopenta.net",
    ]
    start_urls = [
        "http://www.studiopenta.net/rehearsal/index.html",
    ]

    def parse(self, response):
        studio_list_raw = response.xpath(".//section").css("ul")[1].css("li")
        for studio_infos in studio_list_raw:
            studio_name = studio_infos.xpath(".//h2").css("::text").getall()
            studio_phone = studio_infos.xpath(".//h3").css("::text").getall()
            studio_address = studio_infos.css("p.address::text").getall()
            print(studio_name, studio_phone, studio_address)