package org.kh.campus.lecture.service;

import java.util.List;

import org.kh.campus.lecture.domain.Lecture;

public interface LectureService {
	public List<Lecture>printAllLecture();
	public int registerLecture(Lecture lecture);
	public int modifyLecture(int lectureNo);
	public int removeLecture(int lectureNo);
	
}
