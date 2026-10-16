"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 9h8"}],["path",{"d":"M8 13h6"}],["path",{"d":"M13 20l-1 1l-3 -3h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[19,19.5],"a":0.35,"dl":0.2},{"fx":"tilt","n":[2],"o":[12,12.5],"a":-4},{"fx":"pop","n":[0,1],"a":0.3,"dl":0.12,"st":0.08,"os":[[12,9],[11,13]]}];

export const Message2PauseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Message2PauseIcon.displayName = "Message2PauseIcon";
