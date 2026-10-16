"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 12h.01"}],["path",{"d":"M12 12h.01"}],["path",{"d":"M9 12h.01"}],["path",{"d":"M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2"}],["path",{"d":"M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,3,4],"st":0.06,"os":[[15.01,12],[12.01,12],[9,12],[4.5,12],[19.5,12]]}];

export const CodeDotsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CodeDotsIcon.displayName = "CodeDotsIcon";
