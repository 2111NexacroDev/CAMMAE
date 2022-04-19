package org.kh.campus.question.store;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.question.domain.Question;

public interface QuestionStore {

	public int insertQuestion(Question question, SqlSession sqlSession);

}
