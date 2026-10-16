"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5"}],["path",{"d":"M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M22 22a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12.5],"a":-4},{"fx":"pop","n":[1,2],"a":0.3,"dl":0.12,"st":0.08,"os":[[19,17],[19,21]]}];

export const MessageUserIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MessageUserIcon.displayName = "MessageUserIcon";
