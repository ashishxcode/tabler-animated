"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"}],["path",{"d":"M12 11v6"}],["path",{"d":"M9.5 13.5l2.5 -2.5l2.5 2.5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[16.5,5.5],"d":[0,-2.4]},{"fx":"nudge","n":[2,3],"o":[12,14],"d":[0,-2.4]}];

export const FileUploadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileUploadIcon.displayName = "FileUploadIcon";
