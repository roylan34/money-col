import EAProgramRepository from '../../ports/EAProgramRepository';

import {
  buildFetchRecommendedEAPrograms,
  fetchRecommendedEAProgramsUseCase,
} from './fetch-recommended';
import {
  buildFetchMultipleEAPrograms,
  fetchMultipleEAProgramsUseCase,
} from './fetch-multiple-EAPrograms';
import {
  buildFetchEAPrograms,
  fetchEAProgramsUseCase,
} from './fetch-EAPrograms';

import { buildAddEAProgram, addEAProgramUseCase } from './add-ea-program';

import {
  buildUpdateEAProgram,
  updateEAProgramUseCase,
} from './update-ea-program';

import {
  buildFetchEAProgramsWithRecommended,
  fetchEAProgramsWithRecommendedUseCase,
} from './fetch-ea-programs-with-recommended';

import {
  buildRemoveEAProgramsById,
  removeEAProgramsByIdUseCase,
} from './remove-ea-programs-by-id';

export default (dependencies: {
  EAProgramRepo: EAProgramRepository;
}): {
  fetchRecommendedEAPrograms: fetchRecommendedEAProgramsUseCase;
  fetchMultipleEAProgramsById: fetchMultipleEAProgramsUseCase;
  fetchEAPrograms: fetchEAProgramsUseCase;
  addEAProgram: addEAProgramUseCase;
  updateEAProgram: updateEAProgramUseCase;
  fetchEAProgramsWithRecommended: fetchEAProgramsWithRecommendedUseCase;
  removeEAProgramsById: removeEAProgramsByIdUseCase;
} => {
  const { EAProgramRepo } = dependencies;

  const fetchRecommendedEAPrograms = buildFetchRecommendedEAPrograms({
    EAProgramRepo,
  });

  const fetchMultipleEAProgramsById = buildFetchMultipleEAPrograms({
    EAProgramRepo,
  });

  const fetchEAPrograms = buildFetchEAPrograms({ EAProgramRepo });
  const updateEAProgram = buildUpdateEAProgram({
    eaProgramRepo: EAProgramRepo,
  });
  const addEAProgram = buildAddEAProgram({
    eaProgramRepo: EAProgramRepo,
    updateEAProgram,
  });
  const fetchEAProgramsWithRecommended = buildFetchEAProgramsWithRecommended({
    eaProgramRepo: EAProgramRepo,
  });
  const removeEAProgramsById = buildRemoveEAProgramsById({
    eaProgramRepo: EAProgramRepo,
  });

  return {
    fetchRecommendedEAPrograms,
    fetchMultipleEAProgramsById,
    fetchEAPrograms,
    updateEAProgram,
    addEAProgram,
    fetchEAProgramsWithRecommended,
    removeEAProgramsById,
  };
};
