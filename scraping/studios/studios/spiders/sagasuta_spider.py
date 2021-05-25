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

            studio_name, studio_phone = studio_redirect.xpath(".//strong/text()").getall()
            studio_erea = studio_erea.xpath("./text()").extract()
            studio_station = studio_station.xpath("./text()").get()
            studio_time = studio_time.xpath("./text()").get()
            studio_n_rooms = studio_n_rooms.xpath("./text()").get()

            sagasuta_items["name"] = studio_name
            sagasuta_items["group"] = self.get_groupname(studio_name)
            sagasuta_items["phone"] = studio_phone.lstrip("TEL.")
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


    def get_groupname(self, name):
        if "サウンドアーツ" in name:
            return "サウンドアーツ"
        elif "ゲートウェイスタジオ" in name:
            return "ゲートウェイスタジオ"
        elif "スタジオペンタ" in name:
            return "スタジオペンタ"
        elif "サウンドスタジオノア" in name:
            return "サウンドスタジオノア"
        elif "ノアスタジオ" in name:
            return "ノアスタジオ"
        elif "ピアノスタジオノア" in name:
            return "ピアノスタジオノア"
        elif "ピアノサロンノア" in name:
            return "ピアノサロンノア"
        elif "クラウドナインスタジオ" in name:
            return "クラウドナインスタジオ"
        elif "M.studio" in name:
            return "M.studio"
        elif "STUDIO FAMILIA" in name:
            return "STUDIO FAMILIA"
        elif "ロサンゼルスクラブ" in name:
            return "ロサンゼルスクラブ"
        elif "ミュージックスタジオ・フォルテ" in name:
            return "ミュージックスタジオ・フォルテ"
        elif "ベースオントップ" in name:
            return "ベースオントップ"
        elif "リンキィディンクスタジオ" in name:
            return "リンキィディンクスタジオ"
        elif "サウンドスタジオパックス" in name:
            return "サウンドスタジオパックス"
        elif "島村楽器" in name:
            return "島村楽器"
        elif "スタジオマザーハウス" in name:
            return "スタジオマザーハウス"
        elif "MACS大野楽器" in name:
            return "MACS大野楽器"
        elif "伊藤楽器 MUSIC BANK" in name:
            return "伊藤楽器 MUSIC BANK"
        elif "音楽館" in name:
            return "音楽館"
        elif "柏屋楽器 Atic Studio" in name:
            return "柏屋楽器 Atic Studio"
        elif "ガードアイランドスタジオ" in name:
            return "ガードアイランドスタジオ"
        elif "SOUND STUDIO M" in name:
            return "SOUND STUDIO M"
        elif "山響楽器店" in name:
            return "山響楽器店"
        elif "J'Z STUDIO" in name:
            return "J'Z STUDIO"
        elif "STUDIO SUN" in name:
            return "STUDIO SUN"
        elif "STUDIO24" in name:
            return "STUDIO24"
        elif "STUDIO NODE" in name:
            return "STUDIO NODE"
        elif "STUDIO BAYD" in name:
            return "STUDIO BAYD"
        elif "STUDIO BAYD" in name:
            return "STUDIO BAYD"
        elif "SOUND STUDIO FESTA" in name:
            return "SOUND STUDIO FESTA"
        elif "Studio MUGIC" in name:
            return "Studio MUGIC"
        elif "studio museum" in name:
            return "studio museum"
        elif "STUDIO RED" in name:
            return "STUDIO RED"
        elif "TAD POLE STUDIO" in name:
            return "TAD POLE STUDIO"
        elif "東京倶楽部" in name:
            return "東京倶楽部"
        elif "First Avenue Studio" in name:
            return "First Avenue Studio"
        else:
            return None

