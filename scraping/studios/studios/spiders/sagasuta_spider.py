import scrapy
import items

class SagasutaSpider(scrapy.Spider):
    name = "sagasuta_spider"
    allowed_domains = [
        "studio-navi.jp",
    ]
    start_urls = [
        "http://studio-navi.jp/cgi-bin/search.cgi?mokuteki=all&area=syutoken",
    ]

    def parse(self, response):
        studio_list_raw = response.xpath(".//tbody//tr")
        for studio in studio_list_raw:
            sagasuta_items = items.StudiosItem()
            studio_info = studio.xpath(".//td")
            _, studio_redirect, studio_erea, studio_station, studio_time, studio_n_rooms, _, _, _ = studio_info

            studio_name = studio_redirect.xpath(".//strong/text()").get()
            studio_erea = studio_erea.xpath("./text()").extract()
            studio_station = studio_station.xpath("./text()").get()
            studio_time = studio_time.xpath("./text()").get()
            studio_n_rooms = studio_n_rooms.xpath("./text()").get()

            sagasuta_items["name"] = studio_name
            sagasuta_items["erea"] = studio_erea
            sagasuta_items["station"] = studio_station
            sagasuta_items["time"] = studio_time
            sagasuta_items["number_rooms"] = studio_n_rooms

            child_page = "http://studio-navi.jp" + studio_redirect.xpath(".//a/@href").get()
            cb_args = {"parent_items": sagasuta_items}
            yield scrapy.Request(child_page, callback=self.child_parse, cb_kwargs=cb_args)

    def child_parse(self, response, parent_items):
        sagasuta_items = parent_items
        studio_infos = response.xpath(".//div[@id='base-info']//tr")

        for infos in studio_infos:
            info_type, info_body = infos.xpath(".//td")
            info_type = info_type.xpath("./text()").get()
            if info_type == "所在地":
                sagasuta_items["address"] = info_body.xpath("./text()").get()
            elif info_type == "料金（税別）":
                sagasuta_items["fee"] = info_body.xpath("./text()").get()
            elif info_type == "サイト":
                sagasuta_items["url"] = info_body.xpath(".//a/text()").get()
        return sagasuta_items