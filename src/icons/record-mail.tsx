"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M14 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M7 15l10 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2],"o":[12,12],"a":-6}];

export const RecordMailIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RecordMailIcon.displayName = "RecordMailIcon";
