"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 19h-6a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h6a2 2 0 0 1 2 2a2 2 0 0 1 2 -2h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2"}],["path",{"d":"M12 5v16"}],["path",{"d":"M7 7h1"}],["path",{"d":"M7 11h1"}],["path",{"d":"M16 7h1"}],["path",{"d":"M16 11h1"}],["path",{"d":"M16 15h1"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[12,13],"st":0.07},{"fx":"pop","n":[0],"o":[12,12],"a":0.04}];

export const VocabularyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VocabularyIcon.displayName = "VocabularyIcon";
