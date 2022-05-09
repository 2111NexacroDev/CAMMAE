package org.kh.campus.market.domain;

public class MarketReply {
	private int marketReplyNo;
	private int marketNo;
	private int mReplyId;
	private String mReplyWriter;
	private String mReplyContent;
	private String mReplyDate;
	private String mReplyUpdateDat;
	
	public MarketReply () {}

	public MarketReply(int marketReplyNo, int marketNo, int mReplyId, String mReplyWriter, String mReplyContent,
			String mReplyDate, String mReplyUpdateDat) {
		super();
		this.marketReplyNo = marketReplyNo;
		this.marketNo = marketNo;
		this.mReplyId = mReplyId;
		this.mReplyWriter = mReplyWriter;
		this.mReplyContent = mReplyContent;
		this.mReplyDate = mReplyDate;
		this.mReplyUpdateDat = mReplyUpdateDat;
	}

	public int getMarketReplyNo() {
		return marketReplyNo;
	}

	public void setMarketReplyNo(int marketReplyNo) {
		this.marketReplyNo = marketReplyNo;
	}

	public int getMarketNo() {
		return marketNo;
	}

	public void setMarketNo(int marketNo) {
		this.marketNo = marketNo;
	}

	public int getmReplyId() {
		return mReplyId;
	}

	public void setmReplyId(int mReplyId) {
		this.mReplyId = mReplyId;
	}

	public String getmReplyWriter() {
		return mReplyWriter;
	}

	public void setmReplyWriter(String mReplyWriter) {
		this.mReplyWriter = mReplyWriter;
	}

	public String getmReplyContent() {
		return mReplyContent;
	}

	public void setmReplyContent(String mReplyContent) {
		this.mReplyContent = mReplyContent;
	}

	public String getmReplyDate() {
		return mReplyDate;
	}

	public void setmReplyDate(String mReplyDate) {
		this.mReplyDate = mReplyDate;
	}

	public String getmReplyUpdateDat() {
		return mReplyUpdateDat;
	}

	public void setmReplyUpdateDat(String mReplyUpdateDat) {
		this.mReplyUpdateDat = mReplyUpdateDat;
	}

	

	
	

}
