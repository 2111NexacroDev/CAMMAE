package org.kh.campus.lecture.service;

import java.util.List;

import org.kh.campus.board.domain.University;
import org.kh.campus.lecture.domain.Lecture;
import org.kh.campus.professor.domain.Professor;

public interface LectureService {
	
	public List<Lecture>printAllLecture(); // 강의 목록 전체 조회
	public Lecture printOneLecture(int lectureNo); //  강의 상세조회
	
	public int registerLecture(Lecture lecture); // 강의 등록
	public int modifyLecture(Lecture lecture); // 강의 수정
	public int removeLecture(int lectureNo); // 강의 삭제
	
	public List<Professor> printAllProName();
	public List<University> printAllDep();
	
	
	public List<Professor> PrintAllUni();
	public List<Professor> printAllProName(String universityName);
	public List<Lecture> printAlllecture2(String lectureDepartment);
}
