"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12.5 11.5l-4 4l1.5 1.5"}],["path",{"d":"M12 15l-1.5 -1.5"}],["path",{"d":"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3],"o":[12,12],"a":-12}];

export const SquareKeyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareKeyIcon.displayName = "SquareKeyIcon";
