package org.kh.campus.market.domain;

public class Market {
	private int marketNo;
	private String marketType;
	private String marketGoods;
	private String marketPrice;
	private String marketTitle;
	private String marketContent;
	private int marketId;
	private String marketWriter;
	private String marketDate;
	private String marketUpdateDate;
	private int marketCount;
	
	public Market() {}

	public Market(int marketNo, String marketType, String marketGoods, String marketPrice, String marketTitle,
			String marketContent, int marketId, String marketWriter, String marketDate, String marketUpdateDate,
			int marketCount) {
		super();
		this.marketNo = marketNo;
		this.marketType = marketType;
		this.marketGoods = marketGoods;
		this.marketPrice = marketPrice;
		this.marketTitle = marketTitle;
		this.marketContent = marketContent;
		this.marketId = marketId;
		this.marketWriter = marketWriter;
		this.marketDate = marketDate;
		this.marketUpdateDate = marketUpdateDate;
		this.marketCount = marketCount;
	}

	public int getMarketNo() {
		return marketNo;
	}

	public void setMarketNo(int marketNo) {
		this.marketNo = marketNo;
	}

	public String getMarketType() {
		return marketType;
	}

	public void setMarketType(String marketType) {
		this.marketType = marketType;
	}

	public String getMarketGoods() {
		return marketGoods;
	}

	public void setMarketGoods(String marketGoods) {
		this.marketGoods = marketGoods;
	}

	public String getMarketPrice() {
		return marketPrice;
	}

	public void setMarketPrice(String marketPrice) {
		this.marketPrice = marketPrice;
	}

	public String getMarketTitle() {
		return marketTitle;
	}

	public void setMarketTitle(String marketTitle) {
		this.marketTitle = marketTitle;
	}

	public String getMarketContent() {
		return marketContent;
	}

	public void setMarketContent(String marketContent) {
		this.marketContent = marketContent;
	}

	public int getMarketId() {
		return marketId;
	}

	public void setMarketId(int marketId) {
		this.marketId = marketId;
	}

	public String getMarketWriter() {
		return marketWriter;
	}

	public void setMarketWriter(String marketWriter) {
		this.marketWriter = marketWriter;
	}

	public String getMarketDate() {
		return marketDate;
	}

	public void setMarketDate(String marketDate) {
		this.marketDate = marketDate;
	}

	public String getMarketUpdateDate() {
		return marketUpdateDate;
	}

	public void setMarketUpdateDate(String marketUpdateDate) {
		this.marketUpdateDate = marketUpdateDate;
	}

	public int getMarketCount() {
		return marketCount;
	}

	public void setMarketCount(int marketCount) {
		this.marketCount = marketCount;
	}

	@Override
	public String toString() {
		return "Market [marketNo=" + marketNo + ", marketType=" + marketType + ", marketGoods=" + marketGoods
				+ ", marketPrice=" + marketPrice + ", marketTitle=" + marketTitle + ", marketContent=" + marketContent
				+ ", marketId=" + marketId + ", marketWriter=" + marketWriter + ", marketDate=" + marketDate
				+ ", marketUpdateDate=" + marketUpdateDate + ", marketCount=" + marketCount + "]";
	}

	


	
	
}
