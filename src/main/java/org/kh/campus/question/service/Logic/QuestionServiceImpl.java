package org.kh.campus.question.service.Logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.question.domain.Question;
import org.kh.campus.question.domain.QuestionSearch;
import org.kh.campus.question.service.QuestionService;
import org.kh.campus.question.store.QuestionStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private SqlSession sqlSession;
	
	@Autowired
	private QuestionStore qStore;

	@Override
	public List<Question> printAllQuestion() {
		List<Question> qList = qStore.selectAllQuestion(sqlSession);
		return qList;
	}
	

	@Override
	public List<Question> printSearchQuestion(QuestionSearch questionSearch) {
		List<Question> searchList = qStore.selectSearchQuestion(questionSearch, sqlSession); 
		return searchList;
	}
	
	@Override
	public Question printOneQuestion(int questionNo) {
		Question question = qStore.selectOneQuestion(sqlSession, questionNo);
		return question;
	}
	
	@Override
	public int registerQuestion(Question question) {
		int result = qStore.insertQuestion(question, sqlSession);
		return result;
	}

	@Override
	public int modifyQuestion(Question question) {
		int result = qStore.updateQuestion(question, sqlSession);
		return result;
	}
	
	@Override
	public int questionCountUpdate(int questionNo) {
		int result = qStore.updateCount(questionNo, sqlSession);
		return result;
	}

	@Override
	public int removeQuestion(int questionNo) {
		int result = qStore.deleteQuestion(questionNo, sqlSession);
		return result;
	}



	
	
	
}
