"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.58 19.963a9.906 9.906 0 0 1 -4.88 -.963l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c2.13 1.817 3.055 4.368 2.692 6.82"}],["path",{"d":"M16 22l5 -5"}],["path",{"d":"M21 21.5v-4.5h-4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[18.5,19.5],"a":0.35,"dl":0.2},{"fx":"tilt","n":[0],"o":[12.01,11.99],"a":-4}];

export const MessageCircleShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MessageCircleShareIcon.displayName = "MessageCircleShareIcon";
