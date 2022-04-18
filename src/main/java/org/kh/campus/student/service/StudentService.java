package org.kh.campus.student.service;


import org.kh.campus.student.domain.Student;

public interface StudentService {
	// 학생 정보 조회
	public Student printStudent(int studentNo);
	// 수정
	public int modifyStudent(Student student);
}
