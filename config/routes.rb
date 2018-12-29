Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :teams, only: [:create, :update, :show, :index, :destroy] do
      resources :projects, only: [:create, :update, :show, :index, :destroy] do
        resources :columns, only: [:create, :index, :destroy, :update] do
          resources :tasks, only: [:create, :index, :update, :destroy, :show]
        end
      end
    end
  end

  root "static_pages#root"
end
