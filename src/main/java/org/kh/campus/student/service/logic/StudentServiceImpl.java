package org.kh.campus.student.service.logic;


import org.apache.ibatis.session.SqlSession;
import org.kh.campus.student.domain.Student;
import org.kh.campus.student.service.StudentService;
import org.kh.campus.student.store.StudentStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentStore sStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public Student printStudent(int studentNo) {
		Student student = sStore.selectStudent(studentNo, sqlSession);
		return student;
	}
	@Override
	public int modifyStudent(Student student) {
		int result = sStore.updateStudent(student, sqlSession);
		return result;
	}
}
