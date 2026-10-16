"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 5.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666"}],["path",{"d":"M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1"}],["path",{"d":"M17 7h.01"}],["path",{"d":"M7 13l3.644 -3.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644"}],["path",{"d":"M15 12l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l2.644 2.644"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"a":0.25,"st":0.08,"os":[[11.5,11],[18,11.5]]},{"fx":"pop","n":[2],"o":[17.01,7],"a":0.35,"dl":0.12},{"fx":"tilt","n":[0,1],"o":[12,12],"a":-3}];

export const LibraryPhotoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LibraryPhotoIcon.displayName = "LibraryPhotoIcon";
