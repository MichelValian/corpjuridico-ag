"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function UserDeleteModal({ isOpen, onClose, onConfirm, user, loading }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Confirmar eliminación
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    ¿Estás seguro de que deseas eliminar al usuario <span className="font-bold">{user?.name} {user?.lastName}</span>? Esta acción no se puede deshacer.
                  </p>
                </div>

                <div className="mt-4 flex justify-end gap-2">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
                    onClick={onClose}
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none"
                    onClick={() => !loading && onConfirm()} // No permitir clics mientras carga
                    disabled={loading} // Desactivar el botón durante el proceso de eliminación
                  >
                    {loading ? (
                      <span>Eliminando...</span> // Mostrar texto de carga
                    ) : (
                      "Eliminar"
                    )}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
