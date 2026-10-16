"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"}],["path",{"d":"M10 14v-4a2 2 0 1 1 4 0v4"}],["path",{"d":"M14 12h-4"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,13],"a":-4},{"fx":"pop","n":[1,2],"a":0.3,"dl":0.12,"st":0.08,"os":[[12,11],[12,12]]}];

export const MessageLanguageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MessageLanguageIcon.displayName = "MessageLanguageIcon";
