"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12"}],["path",{"d":"M9.5 9h.01"}],["path",{"d":"M14.5 9h.01"}],["path",{"d":"M9.5 13a3.5 3.5 0 0 0 5 0"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,12.5],"a":-4},{"fx":"pop","n":[1,2,3],"a":0.3,"dl":0.12,"st":0.08,"os":[[9.5,9],[14.51,9],[12,13.53]]}];

export const MessageChatbotIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MessageChatbotIcon.displayName = "MessageChatbotIcon";
