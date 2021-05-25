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
        studio_list_raw = response.css("div.studioalllist-wrap").xpath(".//tr")
        for studio_infos in studio_list_raw:
            studio_name = studio_infos.xpath(".//th//a").css("::text").get()
            studio_phone = studio_infos.xpath(".//td//a").css("::text").getall()
            studio_address = studio_infos.css("td::text").getall()

            noah_items = items.StudiosItem()
            noah_items["group"] = "noah"
            noah_items["name"] = studio_name
            
            if len(studio_phone) > 1:
                noah_items["phone"] = [": ".join(studio_phone[:2]), ": ".join(studio_phone[2:])]
            else:
                noah_items["phone"] = studio_phone

            if len(studio_address) == 2:
                studio_address.remove("\n")
            elif len(studio_address) == 0:
                continue
            noah_items["address"] = studio_address[0]
            
            yield noah_items