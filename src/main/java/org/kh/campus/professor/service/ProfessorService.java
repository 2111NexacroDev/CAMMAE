package org.kh.campus.professor.service;

import java.util.List;

import org.kh.campus.professor.domain.Professor;

public interface ProfessorService {
	// 교수 정보 조회
	public List<Professor> printProfessor(Professor professor);
	// 수정
	public int modifyProfessor(Professor professor);
}
