package org.kh.campus.student.store;


import org.apache.ibatis.session.SqlSession;
import org.kh.campus.student.domain.Student;

public interface StudentStore {

	public Student selectStudent(int studentNo, SqlSession sqlSession);

	public int updateStudent(Student student, SqlSession sqlSession);



}
