import scrapy
import items


class PentaSpider(scrapy.Spider):
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
            studio_name = studio_infos.xpath(".//h2").css("::text").get()
            studio_phone = studio_infos.xpath(".//h3").css("::text").get()
            studio_address = studio_infos.css("p.address::text").get()

            penta_items = items.StudiosItem()
            penta_items["group"] = "penta"
            penta_items["name"] = studio_name
            penta_items["phone"] = studio_phone
            penta_items["address"] = studio_address
            
            yield penta_items