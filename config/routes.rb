Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :bikes, only: [:create, :index, :show] do
      resources :reviews, only: [:index]
    end

    resources :reviews, only: [:create]
  end

  get '/', to: 'static_pages#root'

  root to: 'static_pages#root'
end
