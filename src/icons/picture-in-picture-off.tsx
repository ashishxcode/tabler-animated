"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4"}],["path",{"d":"M14 15a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1l0 -3"}],["path",{"d":"M7 9l4 4"}],["path",{"d":"M7 12v-3h3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[17.5,16.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,11],[8.5,10.5]]}];

export const PictureInPictureOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PictureInPictureOffIcon.displayName = "PictureInPictureOffIcon";
