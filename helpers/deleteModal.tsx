import Swal from "sweetalert2";

export function deleteModal(confirmDelete: Function, id: number) {
  Swal.fire({
    title: "Are you sure you want to delete?",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: `No`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      confirmDelete(id);
      Swal.fire("Deleted!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Data not deleted", "", "info");
    }
  });
}
