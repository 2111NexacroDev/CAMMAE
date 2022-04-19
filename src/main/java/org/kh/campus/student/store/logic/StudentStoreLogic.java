package org.kh.campus.student.store.logic;


import org.apache.ibatis.session.SqlSession;
import org.kh.campus.student.domain.Student;
import org.kh.campus.student.store.StudentStore;
import org.springframework.stereotype.Repository;

@Repository
public class StudentStoreLogic implements StudentStore {

	@Override
	public Student selectStudent(int studentNo, SqlSession sqlSession) {
		Student student = sqlSession.selectOne("StudentMapper.selectStudentInfoOne", studentNo);
		return student;
	}

	@Override
	public int updateStudent(Student student, SqlSession sqlSession) {
		int result = sqlSession.update("StudentMapper.updateStudentInfo", student);
		System.out.println(student.getStudentEmail());
		System.out.println(student.getStudentPhonenumber());
		System.out.println(student.getStudentAddress());
		return result;
	}

	

}
