package org.kh.campus.graduation.service;

import java.util.List;

import org.kh.campus.graduation.domain.Graduation;

public interface GraduationService {



	public int registerGraduation(Graduation graduation);

	List<Graduation> printGraduationResult(Graduation graduation);

	public int modifyGraduationAccept(Graduation graduation);

}
