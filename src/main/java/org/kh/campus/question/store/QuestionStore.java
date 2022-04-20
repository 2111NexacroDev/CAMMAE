package org.kh.campus.question.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.question.domain.Question;
import org.kh.campus.question.domain.QuestionSearch;

public interface QuestionStore {

	public List<Question> selectAllQuestion(SqlSession sqlSession);
	public List<Question> selectSearchQuestion(QuestionSearch questionSearch, SqlSession sqlSession);
	public Question selectOneQuestion(SqlSession sqlSession, int questionNo);
	public int insertQuestion(Question question, SqlSession sqlSession);
	public int updateQuestion(Question question, SqlSession sqlSession);
	public int updateCount(int questionNo, SqlSession sqlSession);
	public int deleteQuestion(int questionNo, SqlSession sqlSession);


}
