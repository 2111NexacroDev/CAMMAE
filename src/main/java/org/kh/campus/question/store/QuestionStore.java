package org.kh.campus.question.store;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.question.domain.PageInfo;
import org.kh.campus.question.domain.Question;
import org.kh.campus.question.domain.QuestionReply;

public interface QuestionStore {

	public List<Question> selectAllQuestion(SqlSession sqlSession, PageInfo pi);

	/*
	 * public List<Question> selectSearchQuestion(QuestionSearch questionSearch,
	 * SqlSession sqlSession);
	 */
	public Question selectOneQuestion(SqlSession sqlSession, int questionNo);
	public int insertQuestion(Question question, SqlSession sqlSession);
	public List<Lecture> selectAllPro(SqlSession sqlSession);
	public List<Lecture> selectAllLec(String professorName, SqlSession sqlSession);
	public int updateQuestion(Question question, SqlSession sqlSession);
	public int updateCount(int questionNo, SqlSession sqlSession);
	public int deleteQuestion(int questionNo, SqlSession sqlSession);
	//페이징
	public int selectListCount(SqlSession sqlSession, PageInfo pageInfo);
	//댓글
	public List<QuestionReply> selectAllReply(int questionNo, SqlSession sqlSession);
	public int insertReply(QuestionReply questionReply, SqlSession sqlSession);
	public int updateReply(QuestionReply questionReply, SqlSession sqlSession);
	public int deleteReply(QuestionReply questionReply, SqlSession sqlSession);


}
