"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 11v.01"}],["path",{"d":"M8 11v.01"}],["path",{"d":"M16 11v.01"}],["path",{"d":"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3l12 0"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,3],"st":0.06,"os":[[12,11.01],[8,11.01],[16,11.01],[12,12.5]]}];

export const MessageDotsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MessageDotsIcon.displayName = "MessageDotsIcon";
