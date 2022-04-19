package org.kh.campus.question.service;

import java.util.List;

import org.kh.campus.question.domain.Question;

public interface QuestionService {
	
	//공지사항 조회
	public List<Question> printAllQuestion();
	//공지사항 상세 조회
	public Question printOneQuestion(int questionNo);
	//공지사항 등록
	public int registerQuestion(Question question);

}
