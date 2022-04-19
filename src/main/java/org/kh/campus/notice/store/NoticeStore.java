package org.kh.campus.notice.store;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.notice.domain.Notice;

public interface NoticeStore {
	
	public int insertNotice(Notice notice, SqlSession sqlSession);

}
