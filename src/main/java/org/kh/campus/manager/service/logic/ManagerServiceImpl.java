package org.kh.campus.manager.service.logic;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.kh.campus.manager.domain.Manager;
import org.kh.campus.manager.service.ManagerService;
import org.kh.campus.manager.store.ManagerStore;
import org.kh.campus.professor.domain.Professor;
import org.kh.campus.student.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ManagerServiceImpl implements ManagerService {
	@Autowired
	private ManagerStore mStore;
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public List<Student> printAllStudent() {
		List<Student> sList = mStore.selectAllStudent(sqlSession);
		return sList;
	}
	@Override
	public int registerStudent(Student student) {
		int result = mStore.insertStudent(sqlSession, student);
		return result;
	}
	@Override
	public int modifyrStudent(Student student) {
		int result = mStore.updateStudent(sqlSession, student);
		return result;
	}
	@Override
	public int deleteStudent(int studentNo) {
		int result = mStore.deleteStudent(sqlSession, studentNo);
		return result;
	}
	@Override
	public List<Professor> printAllProfessor() {
		List<Professor> pList = mStore.selectAllProfessor(sqlSession);
		return pList;
	}
	@Override
	public int registerProfessor(Professor professor) {
		int result = mStore.insertProfessor(sqlSession, professor);
		return result;
	}
	@Override
	public int modifyrProfessor(Professor professor) {
		int result = mStore.updateProfessor(sqlSession, professor);
		return result;
	}
	@Override
	public int deleteProfessor(int professorNo) {
		int result = mStore.deleteProfessor(sqlSession, professorNo);
		return result;
	}
	@Override
	public List<Manager> printAllManager() {
		List<Manager> sList = mStore.selectAllManager(sqlSession);
		return sList;
	}
	@Override
	public int registerManager(Manager manager) {
		int result = mStore.insertManager(sqlSession, manager);
		return result;
	}
	@Override
	public int modifyrManager(Manager manager) {
		int result = mStore.updateManager(sqlSession, manager);
		return result;
	}
	@Override
	public int deleteManager(int managerNo) {
		int result = mStore.deleteManager(sqlSession, managerNo);
		return result;
	}
}
