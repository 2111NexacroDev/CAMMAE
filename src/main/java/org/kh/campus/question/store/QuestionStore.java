package org.kh.campus.question.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.question.domain.Question;

public interface QuestionStore {

	public List<Question> selectAllQuestion(SqlSession sqlSession);
	public Question selectOneQuestion(SqlSession sqlSession, int questionNo);
	public int insertQuestion(Question question, SqlSession sqlSession);
	public int updateQuestion(Question question, SqlSession sqlSession);
	public int deleteQuestion(int questionNo, SqlSession sqlSession);


}
