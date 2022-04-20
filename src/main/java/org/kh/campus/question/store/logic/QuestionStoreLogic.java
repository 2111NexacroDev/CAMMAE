package org.kh.campus.question.store.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.question.domain.Question;
import org.kh.campus.question.store.QuestionStore;
import org.springframework.stereotype.Repository;

@Repository
public class QuestionStoreLogic implements QuestionStore {

	@Override
	public List<Question> selectAllQuestion(SqlSession sqlSession) {
		List<Question> qList = sqlSession.selectList("QuestionMapper.selectAllQuestion");
		return qList;
	}
	@Override
	public Question selectOneQuestion(SqlSession sqlSession, int questionNo) {
		Question question = sqlSession.selectOne("QuestionMapper.selectOneQuestion", questionNo);
		return question;
	}
	
	@Override
	public int insertQuestion(Question question, SqlSession sqlSession) {
		int result = sqlSession.insert("QuestionMapper.insertQuestion", question);
		return result;
	}
	
	@Override
	public int updateQuestion(Question question, SqlSession sqlSession) {
		int result = sqlSession.update("QuestionMapper.updateQuestion", question);
		return result;
	}

	@Override
	public int updateCount(int questionNo, SqlSession sqlSession) {
		int result = sqlSession.update("QuestionMapper.updateCount", questionNo);
		return result;
	}
	
	@Override
	public int deleteQuestion(int questionNo, SqlSession sqlSession) {
		int result = sqlSession.delete("QuestionMapper.deleteQuestion", questionNo);
		return result;
	}



}