package org.kh.campus.notice.store.logic;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.notice.domain.Notice;
import org.kh.campus.notice.store.NoticeStore;
import org.springframework.stereotype.Repository;

@Repository
public class NoticeStoreLogic implements NoticeStore{

	@Override
	public int insertNotice(Notice notice, SqlSession sqlSession) {
		int result = sqlSession.insert("NoticeMapper.insertNotice",notice);
		return result;
	}

}
