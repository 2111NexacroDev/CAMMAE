package org.kh.campus.professor.service;


import org.kh.campus.professor.domain.Professor;

public interface ProfessorService {
	// 교수 정보 조회
	public Professor printProfessor(int professorNo);
	// 수정
	public int modifyProfessor(Professor professor);
}
