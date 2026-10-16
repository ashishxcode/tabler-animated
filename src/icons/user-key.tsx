"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"}],["path",{"d":"M6 21v-2a4 4 0 0 1 4 -4h5"}],["path",{"d":"M18.5 18.5l-3.5 3.5l-1.5 -1.5"}],["path",{"d":"M18.554 18.414a2 2 0 1 1 2.828 -2.828a2 2 0 0 1 -2.828 2.828"}],["path",{"d":"M16 19l1 1"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4],"o":[13.97,12.5],"a":-12}];

export const UserKeyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
UserKeyIcon.displayName = "UserKeyIcon";
