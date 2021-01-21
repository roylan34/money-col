import ProjectContentRepository from '../../ports/ProjectContentRepository';

import {
  buildFetchProjectContent,
  fetchProjectContentUseCase,
} from './fetch-project-content-by-id';
import {
  buildFetchRecommendedProjectContents,
  fetchRecommendedProjectContentsUseCase,
} from './fetch-recommended';
import {
  buildFetchMultipleProjectContents,
  fetchMultipleProjectContentsUseCase,
} from './fetch-multiple-project-contents';
import {
  buildFetchProjectContentsWithRecommended,
  fetchProjectContentsWithRecommendedUseCase,
} from './fetch-project-contents-with-recommended';

import {
  buildAddProjectContent,
  addProjectContentUseCase,
} from './add-project-content';
import {
  buildFetchProjectContents,
  fetchProjectContentsUseCase,
} from './fetch-project-contents';

import {
  buildUpdateProjectContent,
  updateProjectContentUseCase,
} from './update-project-content';
import {
  buildRemoveProjectContentsById,
  removeProjectContentsByIdUseCase,
} from './remove-project-contents-by-id';

export default (dependencies: {
  projectContentRepo: ProjectContentRepository;
}): {
  fetchProjectContent: fetchProjectContentUseCase;
  fetchRecommendedProjectContents: fetchRecommendedProjectContentsUseCase;
  fetchMultipleProjectContentsById: fetchMultipleProjectContentsUseCase;
  fetchProjectContents: fetchProjectContentsUseCase;
  fetchProjectContentsWithRecommended: fetchProjectContentsWithRecommendedUseCase;
  addProjectContent: addProjectContentUseCase;
  updateProjectContent: updateProjectContentUseCase;
  removeProjectContentsById: removeProjectContentsByIdUseCase;
} => {
  const { projectContentRepo } = dependencies;

  const fetchProjectContent = buildFetchProjectContent({ projectContentRepo });
  const fetchRecommendedProjectContents = buildFetchRecommendedProjectContents({
    projectContentRepo,
  });
  const fetchMultipleProjectContentsById = buildFetchMultipleProjectContents({
    projectContentRepo,
  });
  const fetchProjectContents = buildFetchProjectContents({
    projectContentRepo,
  });
  const fetchProjectContentsWithRecommended = buildFetchProjectContentsWithRecommended(
    { projectContentRepo },
  );
  const updateProjectContent = buildUpdateProjectContent({
    projectContentRepo,
  });
  const addProjectContent = buildAddProjectContent({
    projectContentRepo,
    updateProjectContent,
  });
  const removeProjectContentsById = buildRemoveProjectContentsById({
    projectContentRepo,
  });

  return {
    fetchProjectContent,
    fetchRecommendedProjectContents,
    fetchMultipleProjectContentsById,
    fetchProjectContents,
    fetchProjectContentsWithRecommended,
    addProjectContent,
    updateProjectContent,
    removeProjectContentsById,
  };
};
