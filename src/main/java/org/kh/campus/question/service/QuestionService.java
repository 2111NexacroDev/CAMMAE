package org.kh.campus.question.service;

import java.util.List;

import org.kh.campus.question.domain.Question;

public interface QuestionService {
	
	//게식글 조회
	public List<Question> printAllQuestion();
	//게시글 상세 조회
	public Question printOneQuestion(int questionNo);
	//게시글 등록
	public int registerQuestion(Question question);
	//게시글 삭제
	public int removeQuestion(int questionNo);

}
