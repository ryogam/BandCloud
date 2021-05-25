import scrapy
from scrapy.crawler import CrawlerRunner
from twisted.internet import reactor, defer
from scrapy.utils.log import configure_logging
from scrapy.utils.project import get_project_settings
from spiders import noah_spider, penta_spider, noah_group_spider, sagasuta_spider


configure_logging()
setting = get_project_settings()
runner = CrawlerRunner(setting)

@defer.inlineCallbacks
def crawl():
    yield runner.crawl(noah_spider.NoahSpider)
    yield runner.crawl(penta_spider.PentaSpider)
    yield runner.crawl(noah_group_spider.NoahGroupSpider)
    yield runner.crawl(sagasuta_spider.SagasutaSpider)
    reactor.stop()

crawl()
reactor.run() # the script will block here until the last crawl call is finished